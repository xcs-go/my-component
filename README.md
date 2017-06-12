# my-component
自己编写的工作中需要的一些常见组件

# 使用方法
1:该插件依赖于jQuery库，在使用该插件之前，请先导入jQuery。
<script type="text/javascript" src="jquery-3.2.1.min.js"></script>

2:HTML请按如下结构布局
<div id="select-wrapper">
		<div>被选中的选项</div>
		<ul>
			<li>选项一</li>
			<li>选项二</li>
			<li>选项三</li>
			<li>选项四</li>
			<li>选项五</li>
			<li>选项六</li>
		</ul>
	</div>

3:在js文件中调用initSelect()方法，该方法接受两个参数，参数一：下拉选项框最外层的dom节点， 参数二(可选)：Object类型的配置对象，目前暂时只是支持容器宽度的配置
 var mySelect = initSelect($('#select-wrapper'));
