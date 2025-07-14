import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-sm">
            <span>© 2025 M Charan Yadav. Made with React</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and lots of enthusiasm.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;