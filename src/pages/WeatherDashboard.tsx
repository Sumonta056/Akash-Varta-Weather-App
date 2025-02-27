import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Button } from "@/components/ui/button";
import WeatherLoadSkeleton from "@/components/WeatherLoadSkeleton";
import { useGeolocation } from "@/hooks/useGeolocation";
import { AlertTriangle, MapPin, RefreshCcw } from "lucide-react";

function WeatherDashboard() {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();
  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      // Reload weather data
    }
  };

  if (locationLoading) {
    return <WeatherLoadSkeleton />;
  }
  if (locationError) {
    return (
      <Alert variant={"destructive"}>
        <AlertTriangle className="w-5 h-5" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription>
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="w-4 h-4 mr-2" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  if (!coordinates) {
    return (
      <Alert variant={"destructive"}>
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription>
          <p>Please enable location access to see your local weather</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="w-4 h-4 mr-2" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  return (
    <div className="space-y-4">
      {/* Favorite Citites */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight"> My Location</h1>
        <Button variant={"outline"} size={"icon"}>
          <RefreshCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default WeatherDashboard;
