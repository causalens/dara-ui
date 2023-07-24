import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExternalLinkAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExternalLinkAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExternalLinkAlt} {...props} />;
};

export default ExternalLinkAlt;
