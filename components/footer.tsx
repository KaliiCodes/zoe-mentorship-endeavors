import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-700 text-primary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
            <Image
              src="/images/zoe-logo.jpg"
              alt="ZOE Mentorship Endeavors"
              className="object-contain"
              height={64}
              width={64}
            />
            <div>
              <h3 className="text-2xl font-bold mb-1">ZOE Mentorship Endeavors</h3>
              <p className="text-primary-foreground/80 italic">
                Admirable Transformation
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80">
              © {currentYear} ZOE Mentorship Endeavors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
