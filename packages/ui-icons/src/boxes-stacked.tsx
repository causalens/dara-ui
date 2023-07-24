import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BoxesStacked icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BoxesStacked = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoxesStacked} {...props} />;
};

export default BoxesStacked;
