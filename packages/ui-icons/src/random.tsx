import { faRandom } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Random icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Random = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRandom} {...props} />;
};

export default Random;
