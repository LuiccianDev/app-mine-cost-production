# Mining Costs and Production Calculator

A comprehensive web application for calculating costs and production parameters in mining operations. Built with modern web technologies to provide real-time calculations for various mining processes.

## Features

- **Drilling Pattern (Malla)**: Calculate burden, spacing, and blast hole parameters
- **Drilling Costs**: Compute drilling operation costs and efficiency metrics
- **Blasting Costs**: Calculate explosive consumption and blasting parameters
- **Drill Rig Requirements**: Determine equipment needs for drilling operations
- **Hauling**: Calculate loading costs and equipment productivity
- **Cleaning**: Compute cleaning operation costs
- **Transport**: Calculate haulage costs and cycle times
- **Backfill Operations**:
  - Cemented backfill calculations
  - Detritic backfill parameters
- **PDF Export**: Generate professional reports with all calculations
- **Local Storage**: Automatically save your calculations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm 10.8.0+
- **Fonts**: Geist Sans, Geist Mono, Bodoni Moda

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10.8.0+

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd mining-calculator

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## Project Structure

```
app/                    # Next.js App Router pages
  ├── layout.tsx        # Root layout
  ├── page.tsx          # Home page
  └── calculadora/      # Calculator page

src/
  ├── components/       # Shared React components
  │   ├── CalculatorLayout.tsx
  │   ├── CalculatorPreview.tsx
  │   └── ui/           # Reusable UI components
  ├── features/         # Feature modules
  │   ├── malla/
  │   ├── perforacion/
  │   ├── voladura/
  │   ├── carguio/
  │   ├── limpieza/
  │   ├── transporte/
  │   ├── requerimiento-perforadora/
  │   └── relleno/
  ├── context/          # React Context providers
  └── lib/              # Utilities and constants

public/                 # Static assets
```

## Key Features

### Real-time Calculations

All calculations update instantly as you modify input values, providing immediate feedback.

### Persistent Storage

Your calculations are automatically saved to browser local storage, so you never lose your work.

### Professional Reports

Generate PDF reports with all your calculations formatted professionally.

### Responsive Design

Works seamlessly on desktop, tablet, and mobile devices.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)
