function injectCode() {
	console.log("Discord Webcam Auto Mirror Disabler Launched");
	// Function to handle the appearance of new video elements
	function handleNewVideoElements(mutationsList) {
		mutationsList.forEach((mutation) => {
			mutation.addedNodes.forEach((node) => {
				if (node instanceof HTMLElement) {
					// trying to find video element with the mirror class
					let cls = "mirror_";
					let element = node.querySelector(`video[class*="${cls}"]`);

					// if video element found then delete the class
					if (element) {
						console.log("Mirror Class Deleted From Webcam Video Element.");
						element.classList.remove.apply(
							element.classList,
							Array.from(element.classList).filter((v) => v.startsWith(cls))
						);
					}
				}
			});
		});
	}

	// Create a Mutation Observer
	const observer = new MutationObserver(handleNewVideoElements);

	// Define the configuration for the observer
	const config = {
		childList: true, // Watch for changes in the child nodes of the target
		subtree: true, // Watch for changes in the entire subtree
	};

	// Start observing the DOM
	observer.observe(document.body, config);
}

injectCode(); // Call the function to execute the code immediately
