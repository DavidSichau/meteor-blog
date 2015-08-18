################################################################################
# Client-side Config
#


Blog =
  settings:
    title: ''
    blogIndexTemplate: null
    blogShowTemplate: null
    blogNotFoundTemplate: null
    blogAdminTemplate: null
    blogAdminEditTemplate: null
    pageSize: 20
    publicDrafts: true
    excerptFunction: null
    syntaxHighlighting: false
    syntaxHighlightingTheme: 'github'
    comments:
      allowAnonymous: false
      useSideComments: false
      defaultImg: '/packages/ryw_blog/public/default-user.png'
      userImg: 'avatar'
      disqusShortname: null

  config: (appConfig) ->
    # No deep extend in underscore :-(
    if appConfig.comments
      @settings.comments = _.extend(@settings.comments, appConfig.comments)
      delete appConfig.comments
    @settings = _.extend(@settings, appConfig)

@Blog = Blog


################################################################################
# Bootstrap Code
#


Meteor.startup ->


  # Notifications package
  _.extend Notifications.defaultOptions,
    timeout: 5000

################################################################################
# Register Global Helpers
#

UI.registerHelper "blogFormatDate", (date) ->
  moment(new Date(date)).format "MMM Do, YYYY"

UI.registerHelper "blogFormatTags", (tags) ->
  return if !tags?

  for tag in tags
    path = Router.path 'blogTagged', tag: tag
    if str?
      str += ", <a href=\"#{path}\">#{tag}</a>"
    else
      str = "<a href=\"#{path}\">#{tag}</a>"
  return new Spacebars.SafeString str

UI.registerHelper "joinTags", (list) ->
  if list
    list.join ', '

