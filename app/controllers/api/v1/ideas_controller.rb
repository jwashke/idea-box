class Api::V1::IdeasController < Api::V1::ApiController
  protect_from_forgery with: :null_session
end
