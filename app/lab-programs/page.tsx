import { Shield, Globe, Zap, Award, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LabProgramsPage() {
  const programs = [
    {
      title: "Security Test Programs",
      description: "Comprehensive cybersecurity testing for OEMs and enterprises",
      icon: Shield,
      href: "/lab-programs/security-test-programs",
      features: ["Vulnerability Assessment", "Penetration Testing", "FIPS/CC Certification", "Mobile Security Testing"],
      color: "from-red-600 to-orange-600",
    },
    {
      title: "BIS CCTV Certification",
      description: "First BIS approved lab for CCTV security testing under IS 99999:2024",
      icon: Shield,
      href: "/lab-programs/bis-cctv",
      features: ["Essential Security Requirements", "Compliance Testing", "Certification Support"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "IPv6 Ready Logo Program",
      description: "Official IPv6 Ready Logo testing and certification",
      icon: Globe,
      href: "/lab-programs/ipv6-ready-logo",
      features: ["Core Protocol Testing", "IPsec Testing", "Logo Certification"],
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "SDN Certification",
      description: "Software Defined Networking testing and validation",
      icon: Zap,
      href: "/lab-programs/sdn-certification",
      features: ["OpenFlow Testing", "Controller Validation", "Interoperability Testing"],
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "USGv6 Program",
      description: "US Government IPv6 testing and certification program",
      icon: Award,
      href: "/lab-programs/usgv6-program",
      features: ["Government Compliance", "IPv6 Testing", "Security Validation"],
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Product Certification",
      description: "Comprehensive product testing and certification services",
      icon: CheckCircle,
      href: "/lab-programs/product-certification",
      features: ["Performance Testing", "Compliance Validation", "Quality Assurance"],
      color: "from-teal-600 to-cyan-600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-400/30">
              Lab Programs
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">Comprehensive Testing & Certification Programs</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From cybersecurity to network protocols, our lab programs ensure your products meet the highest standards
              of quality, security, and interoperability.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full group-hover:bg-slate-900 transition-colors">
                      <Link href={program.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Additional Testing Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized testing programs for emerging technologies and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardTitle className="text-lg mb-2">Benchmarking</CardTitle>
              <CardDescription>Performance benchmarking and analysis</CardDescription>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardTitle className="text-lg mb-2">TEC Essential Requirements</CardTitle>
              <CardDescription>Telecom equipment certification</CardDescription>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardTitle className="text-lg mb-2">SDN/NFV Solutions</CardTitle>
              <CardDescription>Next-generation network testing</CardDescription>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardTitle className="text-lg mb-2">Independent Testing</CardTitle>
              <CardDescription>Vendor-neutral validation services</CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
