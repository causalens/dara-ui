import { faSection } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Section icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Section = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSection} {...props} />;
};

export default Section;
