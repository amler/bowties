#Bowties

##Getting Started


In order to compile this project's files you will need to have [npm](https://www.npmjs.org/) (the [Node.js](http://nodejs.org/) package manager), [Grunt](http://gruntjs.com/) and [Sass](http://sass-lang.com/). With that in mind, follow the following steps:

1. Install npm by downloading and installing the appropriate package from [Node.js's website](http://nodejs.org/download/).
2. Install Grunt by running `sudo npm install -g grunt-cli` or by following
[Grunt's installation instructions](http://gruntjs.com/getting-started).
3. Install Sass by running `sudo gem install sass` or by following [Sass's installation instructions](http://sass-lang.com/install).
4. After cloning the project's Git repository, run `npm install` on the cloned directory to install all of the project's Grunt dependencies.
5. Run `grunt watch` to confirm that you can successfully compile the project's Sass and Javascript files.


####DATA ENTRY

1. Product images uploaded should be no smaller than 580px x 370px and no larger than 800px * 525px.

2. Custom collections have been created. Collections are a group of products chosen which have some feature in common. Conditions by product type have been set for the following collections which compose your main navigation. When adding products, select the type from the list below in order for your products to appear in the correct collection.
 
*	Bowties
*	Neckties
*	Squares
*	Hankerchiefs
*	Cummerbund Sets
*	Belts
*	Gift Cards
*	Specials

3. The Frontpage collection is limited to display only 4 products on your homepage. To edit the featured products on the homepage, select Collections from the admin area. Select the Frontpage collection link. Manually remove and add products to this collection by selecting the x icon(for removal) or add products by selecting the drop-down menu and searching for products. You also have the option to sort the collection. The Frontpage collection is currently set to manual for drag and drop ability.

4. The use product tags are required to create subcategories of products in Shopify. The secondary navigation menu is created by defining your subcategories. To define your subcategories go to each individual product page in the admin section and add a product tag corresponding to the subcategory to which the product belongs. The bowties subcategories have been predefined: Combo, Formal, Prints, Stripes, and Woven. Tags entered on the product page will create the subcategory navigation menu of each collection.

5. If you want to modify the content of a page you've created. Even after you've posted content on a page in your store, you can always go back and change it. If you spot a typo or want to add new information, it's easy to edit your page.
From your shop admin, go to the Pages section.
Find the page you want to edit in your list of shop pages. Click on the title of the page you want to edit.
Make your changes to the existing page content or settings.
Click Save. Visit the page on your storefront to make sure your changes appear.

6. Adding Products & Variants Manually

Within the admin > product menu > select 'Add a product' and create your original product called "Saluda Stripe Tie". Create your original product. For example, in the title add "Saluda Stripe Tie"and add a brief description. Create a new type from the drop-down menu titled Neckties. Under 'Inventory & variants' add additional information like SKU and price. To advertise the different colors and sizes that your tie comes in, check 'Inventory & variants'

By default, Title is listed under the Option Name and Default Title listed under Option Values. Remove Default title and under the Option Name select 'Create a new option'. Enter in Type and under option values enter the following comma separated types: Navy Saluda Stripe, Green Saluda Stripe. Add any additional variants within the option name menu. You can have a maximum of 3 product options.

Under Images you can upload the different image variations for the same product. Please upload an image size of 580px x 370px. You will now be able to add an image to your variants by clicking on the icons in the "Image" column below. These images will be shown to customers when they select a variant on your website. The first image will be what is featured.

Bulk select actions
You can manually bulk-select variants using the checkboxes beside each variant. The bulk actions select box will appear on the top left side of the table, which includes a number of options.

7. How to build your csv file to import products into your store.
A CSV (comma-separated values) file stores tabular data (numbers and text) in plain-text form. The CSV file is the only accepted form for importing and exporting products.
SAMPLE FORM: 
<a href="http://docs.shopify.com/manual/your-store/products/product-csv">Download and view a sample product CSV file.</a> You can use this as a template for creating your CSV file. Just remember to remove the example products.

A CSV file can only contain text. So you'll need to ensure all product images are on an existing website. Those image URLs will only be used during the CSV importing process (in other words, you can delete them when your import is done).

	* If you are switching to Shopify from another platform, you're all set: just copy the current image URLs and use them in the CSV file.

	* If you only have the files on your computer, you should first upload them to your Shopify store. This article explains how to upload images, pdfs and more to the files page. http://docs.shopify.com/manual/settings/files/upload-files

For more information on how to upload a csv document see http://docs.shopify.com/manual/your-store/products/product-csv
