$(document).ready(function() {

	// Focus
	$("#exam1").focus();

	$("#btn").click(function() {

		// Get the value of each input box
		var exam1 = $("#exam1").val();
		var exam2 = $("#exam2").val();
		var project = $("#project").val();
		
		// Get the value of each span tag
		var spanExail1 = $("#exam1").next();
		var spanExail2 = $("#exam2").next();
		var spanProject = $("#project").next();

		// Flag
		var isBlanck = true;

		// Prevent blank inputs

		if (exam1 == ""){
			spanExail1.text("You must enter your exam 1 grade.");
			isBlanck = false;
		} else if (exam1<1 || exam1>25){
			spanExail1.text("Your grade must be between 1 and 25.");
			isBlanck = false;
		} else {
			spanExail1.text("Great!").css("color", "blue");
		}
		
		if (exam2 == ""){
			spanExail2.text("You must enter your exam 2 grade.");
			isBlanck = false;
		} else if (exam2<1 || exam2>25){
			spanExail2.text("Your grade must be between 1 and 25.");
			isBlanck = false;
		} else {
			spanExail2.text("Great!").css("color", "blue");
		}
		
		if (project == ""){
			spanProject.text("You must enter your project grade.");
			isBlanck = false;
		} else if (project<0 || project>100){
			spanProject.text("Your grade must be between 1% and 100%.");
			isBlanck = false;
		} else {
			spanProject.text("Great!").css("color", "blue");
		}
		

		// Parsing to float
		exam1 = parseFloat(exam1);
		exam2 = parseFloat(exam2);
		project = parseFloat(project);

		project = project * 50 /100;

		var total = (exam1 + exam2 + project);
		var output = $("#output");

		if (isBlanck){
			if (total >= 80){
				output.text("Your grade is: A").addClass("blue");
			} 
			else if (total > 80 || total >= 60){
				output.text("Your grade is: B").addClass("blue");
			}
			else {
				output.text("Your grade is: F");
			}
		}

		return false;
	})
	
});
