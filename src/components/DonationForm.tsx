import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Smartphone, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Donation tiers with their impact descriptions
const donationTiers = [
  { amount: 50000, label: "UGX 50,000", impact: "Provides starter beekeeping tools" },
  { amount: 100000, label: "UGX 100,000", impact: "Supports one week of training" },
  { amount: 250000, label: "UGX 250,000", impact: "Funds protective equipment set" },
  { amount: 500000, label: "UGX 500,000", impact: "Sponsors one complete beehive" },
  { amount: 1000000, label: "UGX 1M", impact: "Trains one family completely" },
];

declare global {
  interface Window {
    FlutterwaveCheckout: any;
  }
}

export const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (customAmount) return parseInt(customAmount);
    if (selectedAmount) return selectedAmount;
    return 0;
  };

  const handleFlutterwavePayment = () => {
    const amount = getFinalAmount();

    if (!amount || amount < 1000) {
      toast({
        title: "Invalid Amount",
        description: "Please enter an amount of at least UGX 1,000",
        variant: "destructive",
      });
      return;
    }

    if (!donorName || !donorEmail || !donorPhone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all your contact details",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Initialize Flutterwave payment
    const publicKey = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY || "FLWPUBK_TEST-XXXXXXXXXXXXXXXXXXXXX-X";
    
    window.FlutterwaveCheckout({
      public_key: publicKey,
      tx_ref: `OFTAC-${Date.now()}`,
      amount: amount,
      currency: "UGX",
      payment_options: "mobilemoneyuganda",
      customer: {
        email: donorEmail,
        phone_number: donorPhone,
        name: donorName,
      },
      customizations: {
        title: "OFTAC Donation",
        description: "Support refugee families through beekeeping",
        logo: "https://oftac.org/logo.png", // Update with your actual logo URL
      },
      callback: (response: any) => {
        console.log("Payment response:", response);
        setIsProcessing(false);

        if (response.status === "successful") {
          toast({
            title: "Thank You! 🎉",
            description: "Your donation has been received successfully!",
          });
          
          // Reset form
          setSelectedAmount(null);
          setCustomAmount("");
          setDonorName("");
          setDonorEmail("");
          setDonorPhone("");

          // You can send this data to your backend here
          // sendDonationToBackend(response);
        } else {
          toast({
            title: "Payment Failed",
            description: "There was an issue processing your payment. Please try again.",
            variant: "destructive",
          });
        }
      },
      onclose: () => {
        setIsProcessing(false);
        console.log("Payment modal closed");
      },
    });
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-honey/20 rounded-full mx-auto mb-4">
          <Heart className="w-8 h-8 text-honey" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-display">Make a Donation</CardTitle>
        <CardDescription className="text-base">
          Support refugee families with Mobile Money (MTN MoMo, Airtel Money)
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Preset Amounts */}
        <div>
          <Label className="text-base font-medium mb-3 block">Select Amount</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {donationTiers.map((tier) => (
              <button
                key={tier.amount}
                onClick={() => handleAmountSelect(tier.amount)}
                className={`p-4 rounded-lg border-2 transition-all hover:border-honey hover:bg-honey/5 ${
                  selectedAmount === tier.amount
                    ? "border-honey bg-honey/10"
                    : "border-border"
                }`}
              >
                <div className="font-bold text-lg">{tier.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{tier.impact}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <Label htmlFor="custom-amount" className="text-base font-medium">
            Or Enter Custom Amount (UGX)
          </Label>
          <Input
            id="custom-amount"
            type="number"
            placeholder="Enter amount"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            className="mt-2 text-lg"
            min="1000"
          />
        </div>

        {/* Donor Information */}
        <div className="space-y-4 pt-4 border-t">
          <h3 className="font-semibold text-lg">Your Information</h3>
          
          <div>
            <Label htmlFor="donor-name">Full Name *</Label>
            <Input
              id="donor-name"
              type="text"
              placeholder="John Doe"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="donor-email">Email Address *</Label>
            <Input
              id="donor-email"
              type="email"
              placeholder="john@example.com"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="donor-phone">Phone Number (for Mobile Money) *</Label>
            <Input
              id="donor-phone"
              type="tel"
              placeholder="+256 700 000 000"
              value={donorPhone}
              onChange={(e) => setDonorPhone(e.target.value)}
              className="mt-1"
              required
            />
          </div>
        </div>

        {/* Payment Button */}
        <div className="pt-4">
          <Button
            onClick={handleFlutterwavePayment}
            disabled={isProcessing || getFinalAmount() < 1000}
            className="w-full bg-honey hover:bg-honey-light text-secondary text-lg h-12"
            size="lg"
          >
            {isProcessing ? (
              <>Processing...</>
            ) : (
              <>
                <Smartphone className="w-5 h-5 mr-2" />
                Donate {getFinalAmount() > 0 && `UGX ${getFinalAmount().toLocaleString()}`} via Mobile Money
              </>
            )}
          </Button>
        </div>

        {/* Security Note */}
        <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
          <CheckCircle2 className="w-5 h-5 text-honey flex-shrink-0 mt-0.5" />
          <p>
            Your payment is secure and processed through Flutterwave. 
            We support MTN Mobile Money and Airtel Money. 100% of your donation goes directly to supporting refugee families.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

