class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    ne1 = params["coords"][0].to_f
    ne2 = params["coords"][1].to_f
    sw1 = params["coords"][2].to_f
    sw2 = params["coords"][3].to_f
    debugger
    (self.lat).between?(ne1, ne2) && (self.lng).between?(sw1, sw2)
  end

end
