import React, { Fragment } from 'react';
import { Styled } from 'theme-ui';

/**
 * Shadow me to add your own bio content
 */

const BioContent = () => (
	<Fragment>
		Words by <Styled.a href="http://example.com/">Bob Bass</Styled.a>.
		<br />
		Software Developer - Automation Expert
	</Fragment>
);

export default BioContent;
