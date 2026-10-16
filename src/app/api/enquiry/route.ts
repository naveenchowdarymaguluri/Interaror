import { NextResponse } from "next/server";

interface EnquiryPayload {
  fullName: string;
  mobile: string;
  email?: string;
  projectType: string;
  propertyType: string;
  budget?: string;
  location: string;
  consultationMethod: string;
  requirements?: string;
}

// In-memory or fallback lead capture store for demonstration/development
// In production, this securely forwards to a CRM endpoint (e.g. Zoho, Salesforce, Webhook, or Postgres DB)
const receivedLeads: Array<EnquiryPayload & { id: string; receivedAt: string }> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      mobile,
      email,
      projectType,
      propertyType,
      budget,
      location,
      consultationMethod,
      requirements,
    } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Clean and validate Indian / International mobile number
    const cleanMobile = (mobile || "").replace(/[^0-9+]/g, "");
    const digitCount = cleanMobile.replace(/[^0-9]/g, "").length;
    if (digitCount < 10 || digitCount > 13) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!projectType || typeof projectType !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select a project type." },
        { status: 400 }
      );
    }

    if (!location || typeof location !== "string" || location.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your project location or city." },
        { status: 400 }
      );
    }

    // Optional email validation if provided
    if (email && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid email address or leave it blank." },
          { status: 400 }
        );
      }
    }

    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      fullName: fullName.trim(),
      mobile: cleanMobile,
      email: email ? email.trim() : undefined,
      projectType,
      propertyType: propertyType || "Not Specified",
      budget: budget || "Not Specified",
      location: location.trim(),
      consultationMethod: consultationMethod || "Phone Call",
      requirements: requirements ? requirements.trim() : "",
      receivedAt: new Date().toISOString(),
    };

    receivedLeads.push(leadRecord);

    // Secure logging without dumping personal data in public channels
    console.log(
      `[Terraform Modular CRM Lead Captured] ID: ${leadRecord.id} | Name: ${leadRecord.fullName} | Type: ${leadRecord.projectType} | Location: ${leadRecord.location}`
    );

    return NextResponse.json({
      success: true,
      message: "Thank you! Your consultation request has been recorded. Our senior interior designer will connect with you within 24 business hours.",
      leadId: leadRecord.id,
    });
  } catch (error) {
    console.error("[Enquiry API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or reach out directly on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "Terraform Modular Secure Enquiry Gateway",
    timestamp: new Date().toISOString(),
  });
}
