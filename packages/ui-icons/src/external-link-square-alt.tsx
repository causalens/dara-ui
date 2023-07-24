import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExternalLinkSquareAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExternalLinkSquareAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExternalLinkSquareAlt} {...props} />;
};

export default ExternalLinkSquareAlt;
