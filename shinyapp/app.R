library(shiny)
source("blockrandomize.R")

ui <- fluidPage(
	mainPanel(
		# verbatimTextOutput(outputId = "webquery")
		textOutput("condition_assigned")
	)
)

server <- function(input, output, session) {
	# observe({
	reactive({
	# query <- parseQueryString(session$clientData$url_search)
	# query <- parseQueryString("?surveyid=jdbk&nconditions=3&blockvalue=green")
	})
	
	output$condition_assigned <- renderText({
		query <- parseQueryString(session$clientData$url_search)

		condition <- blockrandomize(surveyid = query[["surveyid"]],
																blockvalue = query[["blockvalue"]],
																nconditions = query[["nconditions"]],
																reset = query[["reset"]]
		)

		paste(condition)
	})
}

shinyApp(ui = ui, server = server)
