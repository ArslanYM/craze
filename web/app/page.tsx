import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clapperboard, Mail, Youtube, Instagram, Play, ArrowRight, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden selection:bg-purple-500/20">
      
      {/* Vibrant Background Gradients */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px] dark:bg-fuchsia-900"></div>
        <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-400 opacity-30 blur-[120px] dark:bg-blue-900"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-400 opacity-30 blur-[120px] dark:bg-purple-900"></div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur-md dark:bg-black/70">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1.5 shadow-lg shadow-purple-500/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Craze</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
              Log in
            </Link>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 border-0 rounded-full px-6">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
            <Badge variant="secondary" className="mb-8 px-4 py-1.5 text-sm font-medium rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 backdrop-blur-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5 fill-indigo-600 text-indigo-600" />
              AI Video Generation is here
            </Badge>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto leading-[1.1] pb-2">
              Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">AI Shorts</span> <br className="hidden sm:block" />
              Automagically
            </h1>
            
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Create viral short-form videos in seconds. <br className="hidden sm:block" /> Auto-schedule directly to YouTube, Instagram, and Email.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 transition-transform hover:scale-105">
                Start Creating Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted/50 transition-colors">
                View Demo
              </Button>
            </div>
            
            {/* Hero Visual */}
            <div className="mt-24 relative w-full max-w-5xl mx-auto perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 animate-pulse"></div>
              <div className="relative rounded-2xl border bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/20">
                 <div className="aspect-video flex items-center justify-center bg-gradient-to-b from-muted/50 to-background">
                    <div className="flex flex-col items-center gap-6">
                       <div className="h-24 w-24 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group border border-purple-100 dark:border-purple-900/30">
                         <Play className="h-10 w-10 text-indigo-600 ml-1 fill-indigo-600 group-hover:text-purple-600 group-hover:fill-purple-600 transition-colors" />
                       </div>
                       <p className="font-semibold text-lg text-muted-foreground">Watch 2-min Demo</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Everything you need to go viral</h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-[800px]">
                Stop spending hours editing and scheduling. Let AI handle the heavy lifting.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border shadow-lg bg-white/50 backdrop-blur-sm dark:bg-black/40 hover:border-indigo-500/30 hover:shadow-indigo-500/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clapperboard className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-2xl">AI Video Generator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Turn text prompts into engaging short-form videos instantly. Perfect for TikTok, Reels, and Shorts.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border shadow-lg bg-white/50 backdrop-blur-sm dark:bg-black/40 hover:border-purple-500/30 hover:shadow-purple-500/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl">Auto-Scheduler</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Plan your content calendar once. Craze automatically posts to your connected accounts at the best times.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border shadow-lg bg-white/50 backdrop-blur-sm dark:bg-black/40 hover:border-pink-500/30 hover:shadow-pink-500/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-7 w-7 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle className="text-2xl">Multi-Platform Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Seamlessly distribute content across YouTube, Instagram, and Email lists simultaneously.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-24 border-y bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <h3 className="text-2xl font-semibold tracking-tight text-center text-muted-foreground mb-16">
              Integrates seamlessly with your favorite platforms
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
               <div className="flex items-center gap-3 group px-6 py-3 rounded-full bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <Youtube className="h-8 w-8 text-red-600" />
                  <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-red-600 transition-colors">YouTube Shorts</span>
               </div>
               <div className="flex items-center gap-3 group px-6 py-3 rounded-full bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <Instagram className="h-8 w-8 text-pink-600" />
                  <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-pink-600 transition-colors">Instagram Reels</span>
               </div>
               <div className="flex items-center gap-3 group px-6 py-3 rounded-full bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <Mail className="h-8 w-8 text-blue-500" />
                  <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500 transition-colors">Email Campaigns</span>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="relative overflow-hidden bg-zinc-900 dark:bg-zinc-900 rounded-[2.5rem] p-12 md:p-24 shadow-2xl mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
              <div className="absolute -top-24 -right-24 h-64 w-64 bg-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-indigo-500/30 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
                  Ready to go viral?
                </h2>
                <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-12">
                  Join thousands of creators using Craze to scale their video production and audience engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-zinc-200 border-0 transition-transform hover:scale-105">
                    Get Started for Free
                  </Button>
                </div>
                <p className="mt-6 text-sm text-zinc-400">No credit card required • Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 border-t py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 p-1.5">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Craze</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The ultimate AI-powered video creation and scheduling platform for modern content creators. Automate your workflow and grow faster.
              </p>
              <div className="flex gap-4">
                 <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                    <Youtube className="h-4 w-4" />
                 </Button>
                 <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                    <Instagram className="h-4 w-4" />
                 </Button>
                 <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                    <Mail className="h-4 w-4" />
                 </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Integrations</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Changelog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">API Status</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Partners</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Craze Inc. All rights reserved.</p>
            <div className="flex items-center gap-8">
               <span className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-green-500"></div> System Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
