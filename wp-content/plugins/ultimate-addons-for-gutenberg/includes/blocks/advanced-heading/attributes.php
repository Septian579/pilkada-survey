<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$highLight_border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'highLight' );

$enable_legacy_blocks = UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_legacy_blocks' );

$heading_alignment_default = ( 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) ? 'center' : '';
$subheading_toggle_default = 'yes' === get_option( 'uagb-old-user-less-than-2' );

return array_merge(
	$highLight_border_attribute,
	array(
		'classMigrate'                 => false,
		'blockBackground'              => '',
		'blockBackgroundType'          => 'classic',
		'blockGradientBackground'      => 'linear-gradient(90deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)',
		'headingAlign'                 => $heading_alignment_default,
		'headingAlignTablet'           => '',
		'headingDescPosition'          => 'below-heading',
		'seperatorPosition'            => 'below-heading',
		'headingAlignMobile'           => '',
		'headingColor'                 => '',
		'headingColorType'             => 'classic',
		'headingGradientColor'         => 'linear-gradient(90deg, rgb(155, 81, 224) 0%, rgb(6, 147, 227) 100%)',
		'subHeadingColor'              => '',
		'separatorHeightType'          => 'px',
		'separatorSpaceType'           => 'px',
		'separatorColor'               => '#0170b9',
		'seperatorStyle'               => 'none',
		'separatorHeight'              => 2,
		'separatorWidth'               => 12,
		'separatorWidthTablet'         => '',
		'separatorWidthMobile'         => '',
		'separatorWidthType'           => '%',
		'headFontFamily'               => '',
		'headLoadGoogleFonts'          => false,
		'headFontWeight'               => '',
		'headFontStyle'                => '',
		'headFontSize'                 => '',
		'headFontSizeType'             => 'px',
		'headFontSizeTypeTablet'       => 'px',
		'headFontSizeTypeMobile'       => 'px',
		'headFontSizeTablet'           => '',
		'headFontSizeMobile'           => '',
		'headSpaceType'                => 'px',
		'headLineHeight'               => '',
		'headLineHeightType'           => 'em',
		'headLineHeightTablet'         => '',
		'headLineHeightMobile'         => '',
		'headLetterSpacing'            => '',
		'headLetterSpacingTablet'      => '',
		'headLetterSpacingMobile'      => '',
		'headLetterSpacingType'        => 'px',
		'headShadowColor'              => '',
		'headShadowHOffset'            => 0,
		'headShadowVOffset'            => 0,
		'headShadowBlur'               => 10,
		'subHeadFontFamily'            => '',
		'subHeadLoadGoogleFonts'       => false,
		'subHeadFontWeight'            => '',
		'subHeadFontStyle'             => '',
		'subHeadFontSize'              => '',
		'subHeadFontSizeType'          => 'px',
		'subHeadFontSizeTypeTablet'    => 'px',
		'subHeadFontSizeTypeMobile'    => 'px',
		'subHeadFontSizeTablet'        => '',
		'subHeadFontSizeMobile'        => '',
		'subHeadLineHeight'            => '',
		'subHeadLineHeightType'        => 'em',
		'subHeadLineHeightTablet'      => '',
		'subHeadLineHeightMobile'      => '',
		'subHeadLetterSpacing'         => '',
		'subHeadLetterSpacingTablet'   => '',
		'subHeadLetterSpacingMobile'   => '',
		'subHeadLetterSpacingType'     => 'px',
		'headSpace'                    => 15,
		'headSpaceTablet'              => '',
		'headSpaceMobile'              => '',
		'separatorSpace'               => 15,
		'separatorSpaceTablet'         => '',
		'separatorSpaceMobile'         => '',
		'separatorHoverColor'          => '',
		'headTransform'                => '',
		'headDecoration'               => '',
		'subHeadTransform'             => '',
		'subHeadDecoration'            => '',
		// padding.
		'blockTopPadding'              => '',
		'blockRightPadding'            => '',
		'blockLeftPadding'             => '',
		'blockBottomPadding'           => '',
		'blockTopPaddingTablet'        => '',
		'blockRightPaddingTablet'      => '',
		'blockLeftPaddingTablet'       => '',
		'blockBottomPaddingTablet'     => '',
		'blockTopPaddingMobile'        => '',
		'blockRightPaddingMobile'      => '',
		'blockLeftPaddingMobile'       => '',
		'blockBottomPaddingMobile'     => '',
		'blockPaddingUnit'             => 'px',
		'blockPaddingUnitTablet'       => 'px',
		'blockPaddingUnitMobile'       => 'px',
		'blockPaddingLink'             => '',
		// margin.
		'blockTopMargin'               => '',
		'blockRightMargin'             => '',
		'blockLeftMargin'              => '',
		'blockBottomMargin'            => '',
		'blockTopMarginTablet'         => '',
		'blockRightMarginTablet'       => '',
		'blockLeftMarginTablet'        => '',
		'blockBottomMarginTablet'      => '',
		'blockTopMarginMobile'         => '',
		'blockRightMarginMobile'       => '',
		'blockLeftMarginMobile'        => '',
		'blockBottomMarginMobile'      => '',
		'blockMarginUnit'              => 'px',
		'blockMarginUnitTablet'        => 'px',
		'blockMarginUnitMobile'        => 'px',
		'blockMarginLink'              => '',
		// link.
		'linkColor'                    => '',
		'linkHColor'                   => '',
		// Highlight.
		'highLightColor'               => '#fff',
		'highLightBackground'          => '#007cba',
		'highLightLoadGoogleFonts'     => false,
		'highLightFontFamily'          => 'Default',
		'highLightFontWeight'          => 'Default',
		'highLightFontStyle'           => 'normal',
		'highLightTransform'           => '',
		'highLightDecoration'          => '',
		'highLightFontSizeType'        => 'px',
		'highLightFontSizeTypeTablet'  => 'px',
		'highLightFontSizeTypeMobile'  => 'px',
		'highLightLineHeightType'      => 'em',
		'highLightFontSize'            => '',
		'highLightFontSizeTablet'      => '',
		'highLightFontSizeMobile'      => '',
		'highLightLineHeight'          => '',
		'highLightLineHeightTablet'    => '',
		'highLightLineHeightMobile'    => '',
		'highLightLetterSpacing'       => '',
		'highLightLetterSpacingTablet' => '',
		'highLightLetterSpacingMobile' => '',
		'highLightLetterSpacingType'   => 'px',
		'highLightTopPadding'          => '',
		'highLightRightPadding'        => '',
		'highLightLeftPadding'         => '',
		'highLightBottomPadding'       => '',
		'highLightTopPaddingTablet'    => '',
		'highLightRightPaddingTablet'  => '',
		'highLightLeftPaddingTablet'   => '',
		'highLightBottomPaddingTablet' => '',
		'highLightTopPaddingMobile'    => '',
		'highLightRightPaddingMobile'  => '',
		'highLightLeftPaddingMobile'   => '',
		'highLightBottomPaddingMobile' => '',
		'highLightPaddingUnit'         => 'px',
		'highLightPaddingUnitTablet'   => 'px',
		'highLightPaddingUnitMobile'   => 'px',
		'highLightPaddingLink'         => '',
		'subHeadSpace'                 => 15,
		'subHeadSpaceMobile'           => '',
		'subHeadSpaceTablet'           => '',
		'subHeadSpaceType'             => 'px',
		'headingDescToggle'            => $subheading_toggle_default,
		// For Global Block Styles.
		'globalBlockStyleName'         => '',
		'globalBlockStyleId'           => '',
	)
);
