(->
  config = do
    name: \servlet
    debug: false
    domain: \https://jothon.d3b.info/
    is-production: true
    facebook:
      clientID: \<your-facebook-clientid-here>
    google:
      clientID: \<your-google-clientid-here>
  if module? => module.exports = config
)!
