import { Brain, AlertTriangle, ThumbsUp, ThumbsDown } from "lucide-react"
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

        {/* Fake Review Detection */}
        <Alert className="border-primary/20 bg-primary/5">
          <AlertTriangle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm">
            <span className="font-semibold">Fake Review Detection:</span> Only 3% of reviews flagged as potentially
            inauthentic. This product has a high authenticity score.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
