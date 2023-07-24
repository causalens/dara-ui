import { faLanguage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Language icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Language = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLanguage} {...props} />;
};

export default Language;
