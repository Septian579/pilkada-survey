"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkast_block_templates"] = globalThis["webpackChunkast_block_templates"] || []).push([["src_components_reusable_single-block_lazy-single-block_js"],{

/***/ "./src/components/reusable/single-block/lazy-single-block.js":
/*!*******************************************************************!*\
  !*** ./src/components/reusable/single-block/lazy-single-block.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ \"./node_modules/@wordpress/compose/build-module/higher-order/compose.js\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ \"./node_modules/@wordpress/data/build-module/components/with-select/index.js\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ \"react\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _import_block_button_import_block_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../import-block-button/import-block-button */ \"./src/components/reusable/import-block-button/import-block-button.js\");\n/* harmony import */ var _favorite_single_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorite-single-block */ \"./src/components/reusable/single-block/favorite-single-block.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/components/reusable/single-block/utils.js\");\n/* harmony import */ var _utils_easing_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/easing-functions */ \"./src/utils/easing-functions.js\");\n/* harmony import */ var _fade_in_out_fade_in_out_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fade-in-out/fade-in-out.js */ \"./src/components/reusable/fade-in-out/fade-in-out.js\");\n\n\n\n\n\n\n\n\n\nconst {\n  spectra_common_styles,\n  is_rtl\n} = ast_block_template_vars;\nconst visibility = {\n  hidden: 'hidden',\n  visible: 'visible'\n};\nconst SingleBlock = ({\n  item,\n  content,\n  stylesheet,\n  astraCustomizer,\n  globalStylesheet,\n  colorPalette,\n  dynamicContent,\n  selectedImages,\n  disableAi,\n  togglePopup,\n  email,\n  phone,\n  address,\n  onClickBlock\n}) => {\n  const thumbnailRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n  const thumbnailContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n  const thumbnail_image_url = item['thumbnail-image-url'] || '';\n  const featured_image_url = item['featured-image-url'] || '';\n  const spectraPluginStatus = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.getSpectraStatus)();\n  let imageCounter = 0;\n  let containerImageCounter = 0;\n  const [selfState, setSelfState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    importing: false\n  });\n  const [imageThumbnailURL, setThumbnailImageURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);\n  const [imageFeaturedlURL, setFeaturedImageURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);\n  const replaceImages = (images, previewImages) => {\n    if (disableAi) {\n      return;\n    }\n    if (Object.keys(dynamicContent).length === 0 || !dynamicContent) {\n      return;\n    }\n    if (!previewImages?.length) {\n      return;\n    }\n    images?.forEach(function (image) {\n      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.shouldSkipReplacement)(image.src)) {\n        return;\n      }\n      image.onload = () => {\n        // Skip if the image is already replaced.\n        const imageSrc = image.getAttribute('src') || '';\n        if (imageSrc.includes('unsplash') || imageSrc.includes('pexels') || imageSrc.includes('pixabay')) {\n          updateVisibility(image, visibility.visible);\n          return;\n        }\n        const imageUrl = previewImages[imageCounter];\n        if (undefined === imageUrl) {\n          updateVisibility(image, visibility.visible);\n          return;\n        }\n        if (!(imageUrl.url.includes('unsplash') || imageUrl.url.includes('pexels') || imageUrl.url.includes('pixabay'))) {\n          updateVisibility(image, visibility.visible);\n          return;\n        }\n        imageCounter++;\n        if (undefined === previewImages[imageCounter]) {\n          imageCounter = 0;\n        }\n        if ('PICTURE' === image.parentNode.nodeName) {\n          const sourceElements = image.parentNode.querySelectorAll('source');\n          sourceElements.forEach(source => {\n            source.setAttribute('srcset', imageUrl.optimized_url);\n          });\n          const imageElement = image.parentNode.querySelector('img');\n          imageElement.setAttribute('src', imageUrl.optimized_url);\n        } else {\n          const newImage = document.createElement('img');\n          newImage.src = imageUrl.optimized_url;\n          image.parentNode.replaceChild(newImage, image);\n        }\n        updateVisibility(image, visibility.visible);\n      };\n      image.onerror = () => {\n        updateVisibility(image, visibility.visible);\n      };\n    });\n  };\n  const replaceContactDetails = contentStr => {\n    const emailSrc = 'contact@example.com';\n    const phoneSrc = '202-555-0188';\n    const addressSrc = '2360 Hood Avenue, San Diego, CA, 92123';\n    if (email) {\n      contentStr = contentStr.replace(emailSrc, email);\n    }\n    if (phone) {\n      contentStr = contentStr.replace(phoneSrc, phone);\n    }\n    if (address) {\n      contentStr = contentStr.replace(addressSrc, address);\n    }\n    return contentStr;\n  };\n  const replaceContainerImages = (styleContent, images = []) => {\n    if (disableAi) {\n      return styleContent;\n    }\n    if (Object.keys(dynamicContent).length === 0 || !dynamicContent) {\n      return styleContent;\n    }\n    if (images && images.length === 0) {\n      return styleContent;\n    }\n    const backgroundImageRegex = /background-image\\s*:\\s*url\\(['\"]?([^'\")]+)['\"]?\\)/g;\n    const newStyleContent = styleContent.replace(backgroundImageRegex, function (match, imageUrl) {\n      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.shouldSkipReplacement)(imageUrl)) {\n        return match;\n      }\n      if (!images[containerImageCounter]?.url) {\n        return '';\n      }\n      const currentImageUrl = images[containerImageCounter]?.url;\n      containerImageCounter++;\n      containerImageCounter %= images.length;\n      return 'background-image: url(\"' + currentImageUrl + '\")';\n    });\n    return newStyleContent;\n  };\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useLayoutEffect)(() => {\n    let isMounted = true;\n    const previewImages = selectedImages;\n    const imgThumbnail = new Image();\n    imgThumbnail.src = thumbnail_image_url;\n    const imgFeatured = new Image();\n    imgFeatured.src = featured_image_url;\n    const thumbnailContainer = thumbnailContainerRef.current;\n    function handleThumbnailLoad(image, setURL) {\n      if (isMounted) {\n        image.onload = () => {\n          setURL(image.src);\n        };\n      }\n    }\n    handleThumbnailLoad(imgThumbnail, setThumbnailImageURL);\n    handleThumbnailLoad(imgFeatured, setFeaturedImageURL);\n    const astraWpEditorCss = document.getElementById('astra-wp-editor-styles-inline-css')?.textContent.replace(/:root/g, '.block-container').replace(/body/g, '.block-container'),\n      astraBlockEditorCss = document.getElementById('astra-block-editor-styles-inline-css')?.textContent.replace(/:root/g, '.block-container').replace(/body/g, '.block-container');\n    let markup = ``;\n    if (stylesheet) {\n      stylesheet = replaceContainerImages(stylesheet, previewImages);\n    }\n    markup += astraCustomizer ? `<style type=\"text/css\" id=\"gt-astra-customizer\">${astraCustomizer}</style>` : '';\n    markup += `<style type=\"text/css\" id=\"gt-spectra-common-stylesheet\">${spectra_common_styles}</style>`;\n    markup = stylesheet ? `${markup} <style type=\"text/css\" id=\"gt-common-stylesheet\">${stylesheet}</style>` : markup;\n    if (globalStylesheet) {\n      markup = markup + `<style type=\"text/css\" id=\"gt-global-stylesheet\"> ${globalStylesheet} </style>`;\n    }\n    if (astraWpEditorCss) {\n      markup = markup + `<style type=\"text/css\" id=\"gt-wpeditor-css\" > ${astraWpEditorCss} </style>`;\n    }\n    if (astraBlockEditorCss) {\n      markup = markup + `<style type=\"text/css\" id=\"gt-blockeditor-css\"> ${astraBlockEditorCss} </style>`;\n    }\n    if (thumbnailContainer && content) {\n      let shadow = thumbnailContainer.shadowRoot;\n      if (shadow === null) {\n        shadow = thumbnailContainer.attachShadow({\n          mode: 'open'\n        });\n      }\n      if (shadow === null) {\n        return;\n      }\n      let original_content = content;\n      if (!disableAi) {\n        const dynamic_content = dynamicContent ?? [];\n        if (dynamic_content && Object.keys(dynamic_content)?.length > 0) {\n          Object.keys(dynamic_content).forEach(key => {\n            original_content = dynamic_content[key] !== null ? original_content.replace(key, dynamic_content[key]) : original_content;\n          });\n        }\n        if (!!dynamicContent && Object.keys(dynamicContent).length > 0) {\n          original_content = replaceContactDetails(original_content);\n          original_content = replaceGoogleMapLocation(original_content);\n        }\n      }\n      shadow.innerHTML = markup + '<div class=\"st-block-container\">' + original_content + '</div>';\n      // shadow.innerHTML = markup + '<div class=\"st-block-container\">' + ast_block_template_vars.header_markup + original_content + ast_block_template_vars.footer_markup + '</div>';\n      colorPalette.forEach((color, index) => {\n        shadow?.host.style.setProperty(`--ast-global-color-${index}`, color);\n      });\n      const images = thumbnailContainer.shadowRoot.querySelectorAll('img');\n      if (shadow) {\n        images.forEach(imageItem => {\n          if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.shouldSkipReplacement)(imageItem.src) || disableAi || previewImages?.length === 0 || Object.keys(dynamicContent).length === 0 || !dynamicContent) {\n            return;\n          }\n          updateVisibility(imageItem, visibility.hidden);\n        });\n        updateScaling();\n        replaceImages(images, previewImages);\n      }\n    }\n    return () => {\n      isMounted = false;\n    };\n  }, [item, disableAi, dynamicContent, selectedImages]);\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {\n    const resizeObserver = new ResizeObserver(updateScaling);\n    resizeObserver.observe(document.documentElement);\n    return () => {\n      if (!resizeObserver) {\n        return;\n      }\n      resizeObserver.disconnect();\n    };\n  }, []);\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {\n    const astPopup = document.querySelector('#ast-block-templates-modal-wrap');\n    if (!astPopup) {\n      return;\n    }\n    const observer = new MutationObserver(updateScaling);\n    observer.observe(astPopup, {\n      childList: true,\n      attributes: true,\n      subtree: true\n    });\n    return () => {\n      if (!observer) {\n        return;\n      }\n      observer.disconnect();\n    };\n  }, []);\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {\n    const thumbnailContainer = thumbnailContainerRef?.current;\n    if (thumbnailContainer) {\n      const shadow = thumbnailContainer.shadowRoot;\n      colorPalette.forEach((color, index) => {\n        if (shadow === null) {\n          return;\n        }\n        shadow.host.style.setProperty(`--ast-global-color-${index}`, color);\n      });\n    }\n  }, [colorPalette]);\n  function updateScaling() {\n    const thumbnail = thumbnailRef?.current;\n    const thumbnailContainer = thumbnailContainerRef?.current;\n    if (!thumbnail || !thumbnailContainer) {\n      return;\n    }\n    const width = thumbnail.parentNode.offsetWidth;\n    const scale = width / 1200;\n    const scaledHeight = scale * thumbnailContainer.offsetHeight;\n    thumbnail.style.transform = `scale(${scale})`;\n    thumbnail.style.height = `${scaledHeight}px`;\n  }\n  const updateVisibility = (element, value) => {\n    if (!element) {\n      return;\n    }\n    element.style.visibility = value;\n  };\n  const replaceGoogleMapLocation = (contentStr = '') => {\n    if (!address) {\n      return contentStr;\n    }\n    const regex = /(src=\"https:\\/\\/maps\\.google\\.com\\/maps\\?q=)([^&]+)(&z=\\d+&hl=en&t=m&output=embed&iwloc=near\")/g;\n    return contentStr.replace(regex, `$1${encodeURIComponent(address)}$3`);\n  };\n  let scrollTimeout = 0;\n  let startScroll = 0;\n  const scrollToPosition = (element, position, duration) => {\n    const start = element.scrollTop;\n    const change = position - start;\n    const increment = 20;\n    let currentTime = 0;\n    const animateScroll = function () {\n      currentTime += increment;\n      const val = _utils_easing_functions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].linearTween(currentTime, start, change, duration);\n      element.scrollTop = val;\n      if (currentTime < duration) {\n        scrollTimeout = setTimeout(animateScroll, increment);\n      }\n    };\n    animateScroll();\n  };\n  const handleScrollDown = () => {\n    if (item.type !== 'page') {\n      return;\n    }\n    const scrollContainer = thumbnailContainerRef.current;\n    if (scrollTimeout) {\n      clearTimeout(scrollTimeout);\n    }\n    startScroll = setTimeout(() => {\n      scrollToPosition(scrollContainer, scrollContainer.scrollHeight, 4000);\n    }, 1000);\n  };\n  const handleScrollUp = () => {\n    if (startScroll) {\n      clearTimeout(startScroll);\n    }\n    const scrollContainer = thumbnailContainerRef.current;\n    if (scrollTimeout) {\n      clearTimeout(scrollTimeout);\n    }\n    scrollToPosition(scrollContainer, 0, 1500);\n  };\n  const getInsertButtonText = () => {\n    if (spectraPluginStatus.notInstalled) {\n      return 'Install Spectra & Insert';\n    }\n    if (spectraPluginStatus.inactive) {\n      return 'Activate Spectra & Insert';\n    }\n    return 'Insert';\n  };\n  const handleOnClickSingleBlock = blockItem => event => {\n    if (!event || event?.target === 'gt-single-block-action-btns' || typeof onClickBlock !== 'function') {\n      return;\n    }\n    onClickBlock(blockItem);\n  };\n\n  // Reset the counter when the popup is closed.\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {\n    if (!togglePopup) {\n      imageCounter = 0;\n      containerImageCounter = 0;\n    }\n  }, [togglePopup]);\n  const originClass = is_rtl ? 'origin-top-right' : 'origin-top-left';\n  return /*#__PURE__*/React.createElement(_fade_in_out_fade_in_out_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-full h-fit', true === selfState.importing ? 'importing' : '')\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.classNames)('cursor-pointer relative border border-solid border-border-primary hover:border-accent-spectra transition duration-150 ease-in-out overflow-hidden group', selfState.importing && 'border-accent-spectra')\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: `thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 ${originClass} relative pointer-events-none`,\n    ref: thumbnailRef\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"absolute w-[1200px] pointer-events-none max-h-[1600px] overflow-hidden\",\n    ref: thumbnailContainerRef\n  }, !content && /*#__PURE__*/React.createElement(\"img\", {\n    srcSet: `${imageFeaturedlURL}, ${imageThumbnailURL}`,\n    src: imageThumbnailURL,\n    alt: \"Preview\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"preview\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"ast-block-templates-icon ast-block-templates-icon-search\"\n  })))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end\",\n    onMouseEnter: handleScrollDown,\n    onMouseLeave: handleScrollUp,\n    onClick: handleOnClickSingleBlock(item),\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.classNames)('opacity-0 group-hover:opacity-100 w-full flex items-center justify-between px-3 py-2 backdrop-blur-sm bg-white/[0.85] shadow-action-buttons transition-all duration-150 ease-in-out', true === selfState.importing ? 'opacity-100' : '')\n  }, /*#__PURE__*/React.createElement(_import_block_button_import_block_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: getInsertButtonText(),\n    showIcon: spectraPluginStatus.active,\n    liveRequest: true,\n    item: item,\n    importing: selfState.importing,\n    onClick: () => {\n      setSelfState({\n        ...selfState,\n        importing: true\n      });\n    },\n    onBlockImport: () => {\n      setSelfState({\n        ...selfState,\n        importing: false\n      });\n    },\n    onImportFail: () => {\n      setSelfState({\n        ...selfState,\n        importing: false\n      });\n    }\n  }), /*#__PURE__*/React.createElement(_favorite_single_block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: item\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(select => {\n  const {\n    getDisableAi,\n    getDisablePreview,\n    getTogglePopup\n  } = select('ast-block-templates');\n  return {\n    disableAi: getDisableAi(),\n    disablePreview: getDisablePreview(),\n    togglePopup: getTogglePopup()\n  };\n}))((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.memo)(SingleBlock)));\n\n//# sourceURL=webpack://ast-block-templates/./src/components/reusable/single-block/lazy-single-block.js?");

/***/ })

}]);