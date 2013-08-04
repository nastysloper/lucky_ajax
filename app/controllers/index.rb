get '/' do
  @roll = Roll.create
    erb :index
end

post '/rolls' do

  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.
  
  value = params[:value] ? params[:value].to_i : nil


  @roll = value ? Roll.create({ value: value }) : Roll.create

  if request.xhr?
    erb :roll
  else
    erb :index  # HINT: what does this do? what should we do instead?
                # This causes the page to reload.
                # You don't want the page to reload. You want to render the _dice_image.erb partial.
  end

post '/jax' do
  # next attempt at some AJAX wizardy

  puts params[:jaxster]

  erb :jaxs
end

end
