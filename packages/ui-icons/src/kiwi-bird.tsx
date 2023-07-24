import { faKiwiBird } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * KiwiBird icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const KiwiBird = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKiwiBird} {...props} />;
};

export default KiwiBird;
