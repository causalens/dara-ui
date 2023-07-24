import { faPeace } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Peace icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Peace = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeace} {...props} />;
};

export default Peace;
