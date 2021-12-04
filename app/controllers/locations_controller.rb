class LocationsController < ApplicationController
  before_action :set_trip
  
  
  def index
    # @locations = location.all
    @locations = @trip.locations
    render component: 'locations', props: { trip: @trip, locations: @locations }
  end

  def show
    @location = @trip.locations.find(params[:id])
    render component: 'location', props: { trip: @trip, location: @location }
  end

  def new
    @location = @trip.locations.new
    render component: 'LocationNew', props: { trip: @trip, location: @location }
  end

  def create
    @location = @trip.locations.new(location_params)
    if @location.save
      redirect_to trip_locations_path(@trip)
    else
      render component: 'LocationNew', props: { trip: @trip, location: @location }
    end
  end

  def edit
    @location = @trip.locations.find(params[:id])
    render component: 'LocationEdit', props: { trip: @trip, location: @location }
  end

  def update
    @location = @trip.locations.find(params[:id])
    if @location.update(location_params)
      redirect_to trip_locations_path(@trip)
    else
      render component: 'LocationEdit', props: { trip: @trip, location: @location }
    end
  end

  def destroy
    @location = @trip.locations.find(params[:id])
    @location.destroy
    redirect_to trip_locations_path(@trip)
  end

  private 
    def location_params
      params.require(:location).permit(:body)
    end

    def set_trip
      @trip = Trip.find(params[:trip_id])
    end
end