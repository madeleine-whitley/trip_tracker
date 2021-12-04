class CoursesController < ApplicationController
  before_action :set_trip, only: [:show, :edit, :update, :destroy]

  def index
    @trips = Trip.all 
    render component: 'Trips', props: { trips: @trips }
  end

  def show
    render component: 'Trip', props: { trip: @trip }
  end

  def new
    @trip = Trip.new
    render component: 'TripNew', props: { trip: @trip }
  end

  def create 
    @trip = Trip.new(trip_params)

    if @trip.save
      redirect_to trips_path
    else
      render component: 'TripNew', props: { trip: @trip }
    end
  end

  def edit
    render component: 'TripEdit', props: { trip: @trip }
  end

  def update
    if @trip.update(trip_params)
      redirect_to trips_path
    else
      render component: 'TripEdit', props: { trip: @trip }
    end
  end

  def destroy
    @trip.destroy
    redirect_to trips_path
  end

  private 
    def set_trip
      @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:name, :duration)
    end
end