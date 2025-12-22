import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Phone } from "lucide-react";

export const AlternativePaymentInfo = () => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Other Ways to Donate</CardTitle>
        <CardDescription>
          Prefer to donate through bank transfer or other methods? We've got you covered.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Bank Transfer */}
        <div className="border-l-4 border-honey pl-4">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-honey" />
            <h3 className="font-semibold text-lg">Bank Transfer (Uganda)</h3>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p><strong>Bank Name:</strong> [Your Bank Name]</p>
            <p><strong>Account Name:</strong> Organization for Transforming African Communities</p>
            <p><strong>Account Number:</strong> [Your Account Number]</p>
            <p><strong>Branch:</strong> [Your Branch]</p>
            <p><strong>Swift Code:</strong> [Your Swift Code] (for international transfers)</p>
          </div>
        </div>

        {/* International Wire */}
        <div className="border-l-4 border-primary pl-4">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg">International Donations</h3>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>For donations from outside Uganda, please contact us for wire transfer details or visit our international donation portal.</p>
            <p className="mt-2">We also accept donations through:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>PayPal</li>
              <li>International bank transfer</li>
              <li>Cryptocurrency (Bitcoin, Ethereum)</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-semibold mb-3">Need Help?</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-honey" />
              <a href="mailto:donate@oftac.org" className="hover:underline text-foreground">
                donate@oftac.org
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-honey" />
              <a href="tel:+256700000000" className="hover:underline text-foreground">
                +256 700 000 000
              </a>
            </div>
          </div>
        </div>

        {/* Tax Deductible Note */}
        <div className="text-xs text-muted-foreground border-t pt-4">
          <p>
            <strong>Tax Information:</strong> OFTAC is a registered non-profit organization in Uganda. 
            Tax receipts are available upon request for all donations. Please include your email address 
            with your bank transfer for us to send you a receipt.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

