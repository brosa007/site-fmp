import { cva, type VariantProps } from "class-variance-authority";

export const buttonFMPVariants = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-accent",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "text-foreground hover:bg-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export type ButtonFMPVariants = VariantProps<typeof buttonFMPVariants>;

export const containerFMPVariants = cva("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8");

export const titleVariants = cva("font-heading italic font-medium", {
  variants: {
    variant: {
      display: "text-4xl md:text-5xl lg:text-6xl tracking-tight",
      section: "text-2xl md:text-3xl lg:text-4xl text-primary",
    },
  },
  defaultVariants: {
    variant: "section",
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;

export const cardVariants = cva("rounded-lg transition-all duration-300", {
  variants: {
    variant: {
      default: "bg-card border border-border hover:border-primary hover:shadow-md",
      featured: "bg-primary text-primary-foreground",
      light: "bg-secondary border border-border",
      white: "bg-white border border-border shadow-sm",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-foreground",
        outline: "border border-primary text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
