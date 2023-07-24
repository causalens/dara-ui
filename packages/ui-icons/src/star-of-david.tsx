import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StarOfDavid icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StarOfDavid = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStarOfDavid} {...props} />;
};

export default StarOfDavid;
