require "byebug"

class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(bench.coords)
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save!
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :coords)
  end

end
