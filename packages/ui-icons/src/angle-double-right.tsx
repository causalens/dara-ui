import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AngleDoubleRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AngleDoubleRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngleDoubleRight} {...props} />;
};

export default AngleDoubleRight;
