get '/' do
  @roll = Roll.create # I added this line so the die appears upon initial page load.
  erb :index
end

post '/rolls' do

  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.
  
  value = params[:value] ? params[:value].to_i : nil

  #value = params[:value]

  @roll = value ? Roll.create({ value: value }) : Roll.create
  #@roll = Roll.create({ value: value })

  #if request.xhr?
  #  erb :roll, :layout => false
  #else
    erb :index  # HINT: what does this do? what should we do instead?
  #end

end
