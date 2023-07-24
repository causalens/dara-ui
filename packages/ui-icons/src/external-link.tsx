import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExternalLink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExternalLink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExternalLink} {...props} />;
};

export default ExternalLink;
