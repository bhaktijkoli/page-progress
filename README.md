# Page Progress JS
A simple animated page progress bar.

![screen recording 2018-12-04 at 7 38 20 pm](https://user-images.githubusercontent.com/16408896/49447432-8f222900-f7fc-11e8-9213-1280ce373fb8.gif)


## Setup
Include 'page-progress.min.js' in your html document

```html
<script src="/path/to/page-progress.min.js"></script>
```

## Usage

To add a page progress, add a element at the top for your html document

```html
<div class="page-progress"></div>
```
then via javascript pass the element selector to the pagePrgoress function

```javascript
(function(){
  pagePrgoress('.page-progress');
})()
```
## Details

The pageProgress function accepts two parameters, the selector and the page progress options object.

```javascript
(function(){
  var options = {
    color: '#03A9F4',
    size: '5px',
    position: 'top',
    speed: '500',
  }
  pagePrgoress('.page-progress' , options);
})()
```

### Options
<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 100px;">Name</th>
			<th style="width: 100px;">Type/Options</th>
			<th style="width: 50px;">Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>color</td>
			<td>color</td>
			<td>#03A9F4</td>
			<td>The color of the progress bar.</td>
		</tr>
    <tr>
			<td>size</td>
			<td>property</td>
			<td>5px</td>
			<td>The size of the progress bar.</td>
		</tr>
    <tr>
			<td>position</td>
			<td>Top/Bottom</td>
			<td>top</td>
			<td>Position of the progress bar.</td>
		</tr>
     <tr>
			<td>speed</td>
			<td>Integer(ms)</td>
			<td>500</td>
			<td>Speed of the animation.</td>
		</tr>
	</tbody>
</table>
