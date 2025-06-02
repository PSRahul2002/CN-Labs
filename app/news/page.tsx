import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function NewsPage() {
  const featuredNews = {
    title: "CNLABS Becomes First BIS Approved Laboratory for CCTV Security Testing",
    excerpt:
      "Historic milestone as CNLABS receives official approval from Bureau of Indian Standards for conducting CCTV security testing under IS 99999:2024",
    date: "March 15, 2025",
    category: "Certification",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min read",
  }

  const newsItems = [
    {
      title: "Transforming Computer Network Operations with AI - Webinar Announcement",
      excerpt:
        "Join our upcoming webinar on March 19, 2025, exploring how AI is revolutionizing network operations and security management.",
      date: "March 10, 2025",
      category: "Webinar",
      readTime: "3 min read",
    },
    {
      title: "New IPv6 Security Testing Capabilities Launched",
      excerpt:
        "CNLABS expands its IPv6 testing portfolio with advanced security assessment capabilities for dual-stack deployments.",
      date: "February 28, 2025",
      category: "Technology",
      readTime: "4 min read",
    },
    {
      title: "Partnership with Leading 5G Equipment Manufacturers",
      excerpt:
        "Strategic partnerships established to provide comprehensive 5G security testing and validation services.",
      date: "February 20, 2025",
      category: "Partnership",
      readTime: "3 min read",
    },
    {
      title: "ISO 27001 Compliance Testing Services Now Available",
      excerpt:
        "New service offering helps enterprises achieve and maintain ISO 27001 compliance with comprehensive security assessments.",
      date: "February 15, 2025",
      category: "Service",
      readTime: "4 min read",
    },
    {
      title: "CNLABS Participates in Global Cybersecurity Summit 2025",
      excerpt:
        "Our experts presented latest research on IoT security testing methodologies at the international cybersecurity conference.",
      date: "February 5, 2025",
      category: "Event",
      readTime: "3 min read",
    },
    {
      title: "Advanced SDN Testing Lab Facility Inaugurated",
      excerpt:
        "State-of-the-art Software Defined Networking testing facility launched to support next-generation network validation.",
      date: "January 25, 2025",
      category: "Facility",
      readTime: "5 min read",
    },
  ]

  const upcomingEvents = [
    {
      title: "AI in Network Operations Webinar",
      date: "March 19, 2025",
      time: "2:00 PM IST",
      type: "Webinar",
    },
    {
      title: "IPv6 Security Workshop",
      date: "April 10, 2025",
      time: "10:00 AM IST",
      type: "Workshop",
    },
    {
      title: "5G Security Conference",
      date: "April 25, 2025",
      time: "9:00 AM IST",
      type: "Conference",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">News & Events</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Stay updated with the latest developments in network security testing, industry insights, and CNLABS
              announcements
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {featuredNews.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredNews.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredNews.readTime}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">{featuredNews.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{featuredNews.excerpt}</p>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News Articles */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Latest News</h2>
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {item.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{item.excerpt}</CardDescription>
                      <Button
                        variant="outline"
                        className="group-hover:bg-slate-900 group-hover:text-white transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Upcoming Events</CardTitle>
                  <CardDescription>Don't miss our upcoming webinars and events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="space-y-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {event.type}
                        </Badge>
                        <h4 className="font-semibold text-slate-900">{event.title}</h4>
                        <div className="text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full" variant="outline">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Certification", "Technology", "Webinar", "Partnership", "Service", "Event", "Facility"].map(
                      (category, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <Link
                            href={`/news/category/${category.toLowerCase()}`}
                            className="text-slate-700 hover:text-blue-600 transition-colors"
                          >
                            {category}
                          </Link>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                            {Math.floor(Math.random() * 10) + 1}
                          </Badge>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Stay Updated</CardTitle>
                  <CardDescription className="text-blue-100">
                    Subscribe to our newsletter for the latest news and insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-slate-900 placeholder:text-slate-500"
                    />
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
