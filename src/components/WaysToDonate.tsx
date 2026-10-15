import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Mail, MessageCircle, Smartphone } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export const WaysToDonate = () => {
  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl sm:text-3xl font-display">How to Donate</CardTitle>
        <CardDescription className="text-base">
          Reach out to us and we'll send you the details to complete your gift.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border-l-4 border-honey pl-4">
          <div className="flex items-center gap-2 mb-2">
            <Smartphone className="w-5 h-5 text-honey" />
            <h3 className="font-semibold text-lg">Mobile Money &amp; Bank Transfer (Uganda)</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            We accept MTN Mobile Money, Airtel Money and bank transfers. Message us on WhatsApp or
            email and we'll share the account details.
          </p>
        </div>

        <div className="border-l-4 border-primary pl-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg">International Donations</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Donating from outside Uganda? Contact us and we'll arrange an international transfer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Button size="lg" className="bg-honey text-secondary hover:bg-honey-light" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`mailto:${CONTACT_EMAIL}?subject=Donation%20to%20OFTAC`}>
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground border-t pt-4">
          Please include your name and email address with your transfer so we can send you a receipt.
        </p>
      </CardContent>
    </Card>
  );
};
