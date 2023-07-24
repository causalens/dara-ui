import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StarAndCrescent icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StarAndCrescent = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStarAndCrescent} {...props} />;
};

export default StarAndCrescent;
