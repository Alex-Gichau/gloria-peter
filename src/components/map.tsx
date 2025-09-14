import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MapEmbed() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Church Service Venue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-96">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0838823387885!2d37.01459057496543!3d-1.0993735988900752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f463d3f830df9%3A0xb7319811b26c4f55!2sPCEA%20Juja%20Township!5e0!3m2!1sen!2ske!4v1757818306024!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" // Replace with your actual embed URL
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}