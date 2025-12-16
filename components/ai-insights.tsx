import { Brain, ThumbsUp, ThumbsDown, ShieldAlert, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export function AIInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Sentiment Analysis */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-foreground">Review Sentiment Analysis</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-primary" />
                <span className="font-medium">Positive</span>
              </div>
              <span className="text-muted-foreground">87%</span>
            </div>
            <Progress value={87} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <ThumbsDown className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Negative</span>
              </div>
              <span className="text-muted-foreground">13%</span>
            </div>
            <Progress value={13} className="h-2 bg-muted" />
          </div>
        </div>

        <div className="space-y-3 p-4 rounded-lg border-2 border-amber-500/30 bg-amber-50 dark:bg-amber-950/20">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="h-5 w-5 text-amber-600 dark:text-amber-500" />
            <h4 className="font-bold text-sm text-foreground">Fake Review Detection</h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800">
              <div className="text-xs text-muted-foreground mb-1">Total Fake Reviews</div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-500">23</div>
              <div className="text-xs text-muted-foreground mt-1">out of 847 reviews</div>
            </div>

            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800">
              <div className="text-xs text-muted-foreground mb-1">Fake Review Rate</div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-500">3%</div>
              <div className="text-xs text-muted-foreground mt-1">authenticity: 97%</div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-foreground">Key Insights</h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm p-3 rounded-lg bg-muted">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-medium">Excellent noise cancellation</span> mentioned in 89% of reviews
              </p>
            </div>
            <div className="flex items-start gap-2 text-sm p-3 rounded-lg bg-muted">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-medium">Comfortable for long wear</span> - average rating 4.9/5
              </p>
            </div>
            <div className="flex items-start gap-2 text-sm p-3 rounded-lg bg-muted">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-medium">Battery life exceeds expectations</span> - 30+ hours reported
              </p>
            </div>
          </div>
        </div>

        <Alert className="border-2 border-primary bg-primary/10">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <AlertDescription>
            <div className="space-y-2">
              <div className="font-bold text-base text-foreground">AI Recommendation</div>
              <div className="text-sm font-semibold text-primary">✓ Yes, you should buy this product</div>
              <p className="text-sm text-foreground/90">
                Based on high positive sentiment (87%), low fake review rate (3%), and consistently strong ratings
                across noise cancellation, comfort, and battery life. This product offers excellent value at current
                prices.
              </p>
            </div>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
