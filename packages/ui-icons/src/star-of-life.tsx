import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StarOfLife icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StarOfLife = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStarOfLife} {...props} />;
};

export default StarOfLife;
