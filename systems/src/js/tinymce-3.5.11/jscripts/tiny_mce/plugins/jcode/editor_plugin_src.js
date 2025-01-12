/**
 * Lorem Ipsum plug-in for TinyMCE version 3.x
 * -------------------------------------------
 * $Id: editor_plugin_src.js 10 2009-04-30 23:20:50Z scholzj $
 *
 * @author     JAkub Scholz
 * @version    $Rev: 10 $
 * @package    LoremIpsum
 * @link       http://www.assembla.com/spaces/lorem-ipsum
 */

(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('loremipsum');

	tinymce.create('tinymce.plugins.LoremIpsum', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('mceLoremIpsum', function() {
				ed.windowManager.open({
					file : url + '/loremipsum.html',
					width : 320 + ed.getLang('loremipsum.delta_width', 0),
					height : 180,
					inline : 1
				}, {
					plugin_url : url // Plugin absolute URL
				});
			});

			// Register LoremIpsum button
			ed.addButton('loremipsum', {
				title : 'loremipsum.desc',
				cmd : 'mceLoremIpsum',
				image : url + '/img/loremipsum.gif'
			});

		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'Lorem Ipsum plugin',
				author : 'Jakub Scholz (based on similar plugin from Guszt�v P�lv�lgyi)',
				authorurl : 'http://www.assembla.com/spaces/lorem-ipsum',
				infourl : 'http://www.assembla.com/spaces/lorem-ipsum',
				version : "0.1.2"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('loremipsum', tinymce.plugins.LoremIpsum);
})();