import { CheckCircle, Users, Award, Globe, Target, Linkedin, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Executive Officer",
      expertise: "Network Security, IPv6 Technologies",
      experience: "15+ years",
      education: "Ph.D. Computer Science, IIT Delhi",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "rajesh.kumar@cnlabsglobal.com",
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      expertise: "Cybersecurity, SDN/NFV Testing",
      experience: "12+ years",
      education: "M.Tech Cybersecurity, IISc Bangalore",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "priya.sharma@cnlabsglobal.com",
    },
    {
      name: "Amit Patel",
      role: "Director of Operations",
      expertise: "Quality Management, ISO Standards",
      experience: "10+ years",
      education: "MBA Operations, IIM Ahmedabad",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "amit.patel@cnlabsglobal.com",
    },
  ]

  const testingExperts = [
    {
      name: "Dr. Sneha Reddy",
      role: "Senior Security Testing Engineer",
      expertise: "Penetration Testing, FIPS/CC Certification",
      experience: "8+ years",
      education: "Ph.D. Cybersecurity, IIIT Hyderabad",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "sneha.reddy@cnlabsglobal.com",
    },
    {
      name: "Vikram Singh",
      role: "IPv6 Testing Specialist",
      expertise: "IPv6 Protocol Testing, USGv6 Program",
      experience: "7+ years",
      education: "M.Tech Computer Networks, NIT Trichy",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "vikram.singh@cnlabsglobal.com",
    },
    {
      name: "Anita Gupta",
      role: "IoT Security Engineer",
      expertise: "IoT Device Testing, Mobile Security",
      experience: "6+ years",
      education: "M.Tech Electronics, DTU Delhi",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "anita.gupta@cnlabsglobal.com",
    },
    {
      name: "Rohit Mehta",
      role: "SDN/NFV Testing Engineer",
      expertise: "OpenFlow Testing, Network Virtualization",
      experience: "5+ years",
      education: "B.Tech Computer Science, VIT Vellore",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "rohit.mehta@cnlabsglobal.com",
    },
  ]

  const supportTeam = [
    {
      name: "Kavya Nair",
      role: "Quality Assurance Manager",
      expertise: "NABL Compliance, Documentation",
      experience: "9+ years",
      education: "M.Sc Quality Management, University of Mumbai",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "kavya.nair@cnlabsglobal.com",
    },
    {
      name: "Arjun Krishnan",
      role: "Business Development Manager",
      expertise: "Client Relations, Market Analysis",
      experience: "7+ years",
      education: "MBA Marketing, XLRI Jamshedpur",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "arjun.krishnan@cnlabsglobal.com",
    },
    {
      name: "Deepika Joshi",
      role: "Technical Documentation Lead",
      expertise: "Technical Writing, Standards Documentation",
      experience: "6+ years",
      education: "M.A. Technical Communication, IIIT Bangalore",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      email: "deepika.joshi@cnlabsglobal.com",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-400/30">
              About CNLABS
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">Leading the Future of Network Testing</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              As the first BIS approved laboratory for CCTV security testing, we provide vendor-neutral interoperability
              and independent testing services for network solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center leading-relaxed">
                  To provide world-class testing and certification services that ensure the security, interoperability,
                  and reliability of network equipment and systems, helping our clients meet regulatory requirements and
                  market demands.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center leading-relaxed">
                  To be the globally recognized leader in network testing and certification, driving innovation and
                  setting standards for security, interoperability, and performance in emerging network technologies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Meet Our Expert Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our team of experienced professionals brings together decades of expertise in network security, testing
              methodologies, and industry standards to deliver exceptional results for our clients.
            </p>
          </div>

          {/* Leadership Team */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Leadership Team</h3>
                <p className="text-slate-600">Guiding CNLABS with vision and expertise</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadership.map((member, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Expertise</p>
                        <p className="text-sm text-slate-600">{member.expertise}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Experience</p>
                        <p className="text-sm text-slate-600">{member.experience}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Education</p>
                        <p className="text-sm text-slate-600">{member.education}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testing Experts */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Testing Experts</h3>
                <p className="text-slate-600">Specialized engineers ensuring the highest testing standards</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testingExperts.map((member, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 text-slate-900 hover:bg-white p-2"
                          >
                            <Linkedin className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 text-slate-900 hover:bg-white p-2"
                          >
                            <Mail className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium text-sm">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <p className="text-xs font-medium text-slate-900 mb-1">Expertise</p>
                        <p className="text-xs text-slate-600">{member.expertise}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-900 mb-1">Experience</p>
                        <p className="text-xs text-slate-600">{member.experience}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Team */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Support Team</h3>
                <p className="text-slate-600">Ensuring seamless operations and client satisfaction</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {supportTeam.map((member, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Expertise</p>
                        <p className="text-sm text-slate-600">{member.expertise}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 mb-1">Experience</p>
                        <p className="text-sm text-slate-600">{member.experience}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Why Choose CNLABS?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our expertise, accreditations, and commitment to excellence make us the trusted choice for network testing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">BIS Approved</h3>
              <p className="text-slate-600">
                First BIS approved laboratory for CCTV security testing under Indian Standard IS 99999:2024
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">NABL Accredited</h3>
              <p className="text-slate-600">
                ISO17025 accredited test facility providing globally recognized testing services
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Expert Team</h3>
              <p className="text-slate-600">
                Experienced professionals with deep expertise in network technologies and testing methodologies
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Vendor Neutral</h3>
              <p className="text-slate-600">
                Independent testing facility ensuring unbiased and objective test results
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Comprehensive Testing</h3>
              <p className="text-slate-600">
                Full range of testing services from certification to interoperability and regulatory compliance
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Quality Assurance</h3>
              <p className="text-slate-600">
                Rigorous quality management systems ensuring accurate and reliable test results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Part of Criterion Networks</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                CNLABS is an independent division of Criterion Networks, leveraging decades of experience in network
                technologies and testing methodologies. Our parent company's expertise in network solutions provides us
                with deep technical knowledge and industry insights.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">Established track record in network technology solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">Deep understanding of emerging technologies like SDN, NFV, and IoT</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    Strong relationships with network equipment manufacturers and operators
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl transform -rotate-3"></div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="CNLABS facility"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Our Expert Team</h2>
            <p className="text-xl text-slate-300">
              Are you passionate about network security and testing? We're always looking for talented professionals to
              join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact HR Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
