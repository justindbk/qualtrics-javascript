## This function block randomizes given certain parameters
# nconditions <- 15
# reset <- 1
# blockvalue <- "green"
# surveyid <- "jdbk-qualtricstest"

blockrandomize <- function(surveyid=NULL, blockvalue=NULL, nconditions=NULL, reset = NULL){
	# if resetting, then eliminate file
	filename <- paste0(surveyid,".RData")
	if(!is.null(reset)){
		file.remove(filename)
	} else{ # otherwise, continue
		counter <- list()
		conditions_randomized <- data.frame(rep(NA,nconditions))
		
	
		if(file.exists(filename)){
			load(filename)
			
			# check to make sure things match current arguments - if not, start over:
			if(nrow(conditions_randomized)!=nconditions){
				counter <- list()
				conditions_randomized <- data.frame(rep(NA,nconditions))
			}
			
			# if this block already exists, simply increment the counter:
			if(sum(grepl(blockvalue,names(counter)))>0){
				counter[blockvalue] <- as.numeric(counter[blockvalue]) + 1
				
			} else{ # otherwise start counter at 1 and create randomized block:
				counter[blockvalue] <- 1
				all_conditions <- c(1:nconditions)
				conditions_randomized[,blockvalue] <- sample(all_conditions,nconditions,replace = F)
			}
			
			# if count greater than number of conditions, re-randomize and start at 1 again:
			if(counter[blockvalue]>nconditions){
				all_conditions <- c(1:nconditions)
				conditions_randomized[,blockvalue] <- sample(all_conditions,nconditions,replace = F)
				counter[blockvalue] <- 1
			}
			
			# assign condition based on counter within that block:
			condition_assigned <- conditions_randomized[as.numeric(counter[blockvalue]),blockvalue]
			save(counter,conditions_randomized,file = filename)
			
		} else{
			counter[blockvalue] <- 1
			all_conditions <- c(1:nconditions)
			conditions_randomized[,blockvalue] <- sample(all_conditions,nconditions,replace = F)
			condition_assigned <- conditions_randomized[as.numeric(counter[blockvalue]),blockvalue]
			
			save(counter,conditions_randomized,file = filename)
		}
		return(condition_assigned)
	}
}

