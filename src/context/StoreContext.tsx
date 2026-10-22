"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductItem } from "@/data/productsData";

export interface CartItem {
  product: ProductItem;
  selectedFinish?: string;
  selectedMaterial?: string;
  customDimensions?: string;
  quantity: number;
  notes?: string;
}

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: ProductItem, finish?: string, material?: string, customDimensions?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  wishlist: string[]; // product IDs
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;

  quickViewProduct: ProductItem | null;
  openQuickView: (product: ProductItem) => void;
  closeQuickView: () => void;

  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  isLookbookOpen: boolean;
  openLookbook: () => void;
  closeLookbook: () => void;

  isConsultationOpen: boolean;
  openConsultation: (initialNotes?: string) => void;
  closeConsultation: () => void;
  consultationInitialNotes: string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInitialNotes, setConsultationInitialNotes] = useState("");

  // Load from local storage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("interaror_cart");
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem("interaror_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch {
      // LocalStorage access fails in SSR/restricted environments
    }
  }, []);

  // Save cart
  useEffect(() => {
    try {
      localStorage.setItem("interaror_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Save wishlist
  useEffect(() => {
    try {
      localStorage.setItem("interaror_wishlist", JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Global keyboard shortcut: Cmd+K or Ctrl+K for search, Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setQuickViewProduct(null);
        setIsCartOpen(false);
        setIsLookbookOpen(false);
        setIsConsultationOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const addToCart = (
    product: ProductItem,
    finish?: string,
    material?: string,
    customDimensions?: string
  ) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                selectedFinish: finish || item.selectedFinish,
                selectedMaterial: material || item.selectedMaterial,
              }
            : item
        );
      }
      return [
        ...prev,
        {
          product,
          selectedFinish: finish || product.finishesAvailable?.[0] || "Natural",
          selectedMaterial: material || product.materialsAvailable?.[0] || "Standard",
          customDimensions: customDimensions || product.dimensionsGuide,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((total, item) => {
    const price = item.product.startingPrice || 65000;
    return total + price * item.quantity;
  }, 0);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const wishlistCount = wishlist.length;

  const openQuickView = (product: ProductItem) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openLookbook = () => setIsLookbookOpen(true);
  const closeLookbook = () => setIsLookbookOpen(false);

  const openConsultation = (initialNotes = "") => {
    setConsultationInitialNotes(initialNotes);
    setIsConsultationOpen(true);
  };
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        openSearch,
        closeSearch,
        isLookbookOpen,
        openLookbook,
        closeLookbook,
        isConsultationOpen,
        openConsultation,
        closeConsultation,
        consultationInitialNotes,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
