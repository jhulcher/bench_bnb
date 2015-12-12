# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.delete_all

Bench.create(
  description: "Green Chile Kitchen",
  lat: 37.777940,
  lng: -122.441734
  )

Bench.create(
  description: "Whole Foods on Haight",
  lat: 37.769697,
  lng: -122.450385
  )

Bench.create(
  description: "App Academy",
  lat: 37.781252,
  lng: -122.411355
  )
