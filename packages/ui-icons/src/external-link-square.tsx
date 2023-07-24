import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExternalLinkSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExternalLinkSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExternalLinkSquare} {...props} />;
};

export default ExternalLinkSquare;
