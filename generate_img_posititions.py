import os 
category = "Training"
base_string = '<div class="col-lg-4 col-sm-6 shuffle-item" data-groups="[&quot;training&quot;]"><div class="project-img-container"><a class="gallery-popup" href="images/$/%.jpg" aria-label="project-img"><img class="img-fluid" src="images/$/%.jpg" alt="project-img"><span class="gallery-icon"><i class="fa fa-plus"></i></span></a><div class="project-item-info"><div class="project-item-info-content"><h3 class="project-item-title"><a href="projects-single.html">%</a></h3><p class="project-cat">$</p></div></div></div></div>'
image_list = os.listdir("./images/{}".format(category))
for image in image_list: 
    image_name = image.split(".")[0]
    image_unique = base_string.replace("$", category)
    image_unique = image_unique.replace("%", image_name)
    print(image_unique)