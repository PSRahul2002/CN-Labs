import { Shield, CheckCircle, Award, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BisCctvPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-400/30">
                  BIS Approved Laboratory
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  First BIS Approved Lab for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    CCTV Security Testing
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Certify for compliance with Essential Security Requirements under Indian Standard IS 99999:2024
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  Start Certification
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-400 text-white hover:bg-white/10">
                  Download Standard
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-3xl"></div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="CCTV security testing equipment"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is BIS CCTV Certification */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">What is BIS CCTV Certification?</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The Bureau of Indian Standards (BIS) has mandated Essential Security Requirements for CCTV cameras
                  under Indian Standard IS 99999:2024. CNLABS is the first approved laboratory to conduct these critical
                  security tests.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong>Mandatory Compliance:</strong> Required for all CCTV cameras sold in India
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong>Security Focus:</strong> Ensures cameras meet essential cybersecurity requirements
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong>Market Access:</strong> Certification required for legal sale and distribution
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl transform rotate-3"></div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="BIS certification process"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testing Requirements */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Essential Security Requirements Testing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive testing as per IS 99999:2024 standard to ensure CCTV cameras meet security requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Authentication & Access Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Testing of user authentication mechanisms, password policies, and access control systems
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Verification of data encryption, secure storage, and transmission protection mechanisms
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Software Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Testing of firmware security, update mechanisms, and vulnerability management
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Network Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Validation of network communication security, protocol implementation, and network isolation
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Physical Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Testing of physical tamper protection, secure boot processes, and hardware security features
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Privacy Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Verification of privacy controls, data anonymization, and user consent mechanisms
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Certification Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our streamlined certification process ensures quick and efficient testing while maintaining the highest
              standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Application Submission</h3>
              <p className="text-slate-600">
                Submit your CCTV camera for BIS certification testing with required documentation
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Security Testing</h3>
              <p className="text-slate-600">
                Comprehensive testing against IS 99999:2024 essential security requirements
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Report Generation</h3>
              <p className="text-slate-600">
                Detailed test report with findings and compliance status for BIS submission
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Certification Support</h3>
              <p className="text-slate-600">Ongoing support for BIS certification process and market compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CNLABS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Why Choose CNLABS for BIS CCTV Certification?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">First BIS Approved Laboratory</h3>
                    <p className="text-slate-600">
                      Official recognition as the first laboratory approved for CCTV security testing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Expert Testing Team</h3>
                    <p className="text-slate-600">
                      Specialized cybersecurity experts with deep knowledge of IS 99999:2024
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Comprehensive Testing</h3>
                    <p className="text-slate-600">Complete coverage of all essential security requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Fast Turnaround</h3>
                    <p className="text-slate-600">Efficient testing process with quick report generation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl transform -rotate-3"></div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="CNLABS BIS testing facility"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get BIS CCTV Certification?</h2>
            <p className="text-xl text-blue-100">
              Start your BIS CCTV certification process today with India's first approved testing laboratory
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Start Certification Process
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download IS 99999:2024 Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
